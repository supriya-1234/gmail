import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import results from "../data/results";
import { CheckIcon } from "./CheckIcon";
import { ContentType } from "./ContentType";
import { ModifiedAt } from "./ModifiedAt";
import { TaskListContainer } from "./TaskListButtonContainer";

export const Search = function () {
  const history = useHistory();
  const [selection, setSelection] = useState(false);
  const [selection1, setSelection1] = useState(false);
  return (
    <main>
      <TaskListContainer />
      <header>
        <button className="">Hide from Search</button>
        <input
          id={`select-all`}
          tabIndex="0"
          type="checkbox"
          checked={!selection || !selection1}
          indeterminate="false"
          onClick={() => setSelection1(!selection1)}
        />
        <label htmlFor={`select-all`} className="checkbox"></label>
        <button className="previous">Previous Page</button>
        <button className="next">Next Page</button>
      </header>
      <ul>
        {results.map((result, index) => {
          return (
            <li key={index} className={selection[index] ? "selected" : ""}>
              <input
                id={`search-${index}`}
                tabIndex="0"
                type="checkbox"
                checked={!selection1 || !selection}
                onClick={() => setSelection(!selection)}
              />
              <label htmlFor={`search-${index}`} className="checkbox"></label>
              <div className="thumbnail">
                <img src="https://www.thehairpin.com/wp-content/uploads/2011/01/0dVOZPKzES40OrMqJ.jpg" />
              </div>

              <div className="info">
                <h3>{result.hed || result.name}</h3>
                <span className="publish-status">
                  <span className="icon">
                    <CheckIcon />
                  </span>
                  Published
                </span>
                <span className="type">
                  <ContentType collection={result.collection} />
                </span>
                {result.channel && (
                  <span className="channel">{result.channel}</span>
                )}
                <span className="modified-at">
                  <ModifiedAt date={new Date(Date.parse(result.modifiedAt))} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
