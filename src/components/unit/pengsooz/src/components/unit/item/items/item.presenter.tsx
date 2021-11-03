import { Draggable, Droppable } from "react-beautiful-dnd";
import { Dispatch, SetStateAction } from "react";
import { Wrapper, ItemContainer } from "./item.styles";

declare const window: typeof globalThis & {
  itemState: { [key: string]: number[] };
};

interface Iprops {
  onClickEnterToItemDetail: (event: any) => () => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  ItemData: never[];
  basketId: string;
  colorCode: string;
}

if (typeof window !== "undefined") window.itemState = {};
export default function ItemUI(props: Iprops) {
  const filteredDocs = props.ItemData.filter(
    (doc: any) => props.basketId === doc.basketId
  );

  return (
    <Droppable droppableId={props.basketId} type="item">
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          <div>
            {filteredDocs.map((data: any, index: number) => {
              const basketId = data.basketId;
              const itemIdx = data.index;
              if (
                (window.itemState[basketId]?.length || 0) < filteredDocs.length
              )
                window.itemState = {
                  ...window.itemState,
                  [basketId]: [...(window.itemState[basketId] || []), itemIdx],
                };
              return (
                <Draggable
                  draggableId={data.itemId}
                  index={index + 1}
                  key={data.itemId + index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ItemContainer
                        onClick={props.onClickEnterToItemDetail(data)}
                        color={props.colorCode}
                      >
                        {data.itemTitle}
                      </ItemContainer>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        </Wrapper>
      )}
    </Droppable>
  );
}
