import BasicAccordion from "./BasicAccordion";
import "./Article.css";

export const Article = ({ content_collection }) => {
  return (
    <div>
      {content_collection.map((content) => (
        <div>
          {content.type === "Big Heading" && (
            <h1 className="BigHeading">{content.text}</h1>
          )}
          {content.type === "Small Heading" && (
            <h1 className="SmallHeading">{content.text}</h1>
          )}
          {content.type === "Unordered List" && (
            <ul className="UnorderedList">
              {content.list.map((list_item) => (
                <li key={list_item}>{list_item}</li>
              ))}
            </ul>
          )}
          {content.type === "Ordered List" && (
            <ol>
              {content.list.map((list_item) => (
                <li key={list_item}>{list_item}</li>
              ))}
            </ol>
          )}
          {content.type === "Unordered Box List" && (
            <UnorderedBoxList list={content.list} />
          )}
          {content.type === "Data Collection" && (
            <BasicAccordion data_collection={content.data_collection} />
          )}
        </div>
      ))}
    </div>
  );
};

const UnorderedBoxList = ({ list }) => {
  return (
    <div className="UnorderedBoxListContainer">
      <ul>
        {content.list.map((list_item) => (
          <li key={list_item}>{list_item}</li>
        ))}
      </ul>
      <ul>
        {content.list.map((list_item) => (
          <li key={list_item}>{list_item}</li>
        ))}
      </ul>
    </div>
  );
};
