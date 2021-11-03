import BasketDetail from "./basketDetail/basketDetail.container";
import BasketWrite from "./basketWrite/basketWrite.container";
import { Wrapper } from "./basket.styles";
import { useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dbservice } from "../../../commons/firebase/firebase";

declare const window: typeof globalThis & {
  state: number[];
  itemState: { [key: string]: number[] };
};

export default function BasketUI(props: any) {
  const filteredDocs = props.value?.docs.filter(
    (doc: any) => props.boardId === doc.data().boardId
  );
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesEndPrevRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    messagesEndPrevRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(scrollToBottom, [props.value]);

  if (typeof window !== "undefined") window.state = [];
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const scrollToLeft = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  useEffect(scrollToLeft, [props.loading]);

  const onDragEnd = async (result: any) => {
    const { destination: dst, source: src, draggableId } = result;

    if (!dst) {
      return;
    }

    if (dst.droppableId === src.droppableId && dst.index === src.index) {
      return;
    }

    if (result.type === "basket") {
      const dbIdx: number[] = [
        0.1,
        ...window.state,
        window.state[window.state.length - 1] + 1,
      ];
      const temp =
        dst.index - src.index > 0
          ? (dbIdx[dst.index] + dbIdx[dst.index + 1]) / 2
          : (dbIdx[dst.index] + dbIdx[dst.index - 1]) / 2;

      try {
        await dbservice.collection(result.type).doc(draggableId).update({
          index: temp,
        });
      } catch (err) {}
      return;
    }

    if (result.type === "item") {
      const basketId = dst.droppableId;
      const itemIdx: number[] = [
        0.1,
        ...(window.itemState[basketId] || []),
        window.itemState[basketId]
          ? window.itemState[basketId][window.itemState[basketId]?.length - 1] +
            1
          : 1,
      ];

      if (dst.droppableId === src.droppableId) {
        const itemTemp =
          dst.index - src.index > 0
            ? (itemIdx[dst.index] + itemIdx[dst.index + 1]) / 2
            : (itemIdx[dst.index] + itemIdx[dst.index - 1]) / 2;
        try {
          await dbservice.collection("item").doc(draggableId).update({
            basketId: dst.droppableId,
            index: itemTemp,
          });
          window.itemState = {};
        } catch (err) {}
      } else {
        const dstIdx = dst.index || 1;
        const newItemTemp = (itemIdx[dstIdx] + itemIdx[dstIdx - 1]) / 2;
        try {
          await dbservice.collection("item").doc(draggableId).update({
            basketId,
            index: newItemTemp,
          });
          window.itemState = {};
        } catch (err) {}
      }
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={props.boardId}
        direction={"horizontal"}
        type="basket"
      >
        {(provided) => (
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            <div />
            {filteredDocs?.map((doc: any, index: number) => {
              if (window.state.length < filteredDocs.length)
                window.state = [...window.state, doc.data().index];
              const isPrev = props.value?.docs.length - 1 === index;
              return (
                <Draggable
                  draggableId={doc.data().basketId}
                  index={index + 1}
                  key={index + doc.data().basketId}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <BasketDetail
                        doc={doc}
                        messagesRef={
                          isPrev ? messagesEndPrevRef : messagesEndRef
                        }
                        boardId={props.boardId}
                        onClickBasketUpdate={props.onClickBasketUpdate}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <BasketWrite />
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}
