import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./BasicAccordion.css";

const BasicAccordion = ({ data_collection }) => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    {data_collection.map((data) => (
      <Accordion.Item
        className="AccordionItem"
        value={data.prompt}
        key={data.prompt}
      >
        <AccordionTrigger>
          <div>
            <h3 className="AccordionTriggerNumber">{data.prompt_number}</h3>
            <p className="AccordionTriggerText">{data.prompt}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="AccordionContent">
          {data.answer_type === "Unordered List" && (
            <ul className="AccordionUnorderedList">
              {data.answer.map((list_item) => (
                <li key={list_item}>{list_item}</li>
              ))}
            </ul>
          )}
          {data.answer_type === "Paragraph" && data.answer}
          {/* {data.answer} */}
        </AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default BasicAccordion;
