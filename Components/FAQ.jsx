import "./FAQ.scss";
import React from "react";
import { FaSearch } from "react-icons/fa";
export default function FAQ(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = props.data.filter((item) =>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="container">
      <h2 className="heading">How can we help you?</h2>
      <Searchbar onSearchChange={handleSearchChange} />
      <section className="faq">
        {searchResults.map((item) => (
          <Question
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </div>
  );
}

const Searchbar = (props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    props.onSearchChange(e);
  };
  return (
    <form>
     <FaSearch style={{position:"absolute"}} />
      <input
        className="searchbar"
        type="text"
        placeholder="Describe your issue"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

const Question = (props) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
  return (
    <div className="question-wrapper">
      <div className="question" id={props.id}>
        <h3 onClick={() => handleClick(props.id)}>{props.question}</h3>
        <button onClick={() => handleClick(props.id)}>
          <svg
            className={isActive ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div className={isActive ? "answer active" : "answer"}>
        {props.answer}
      </div>
    </div>
  );
};

//ReactDOM.render(, document.querySelector('#root'));

//  function FAQ({faqsList}) {

//   return (
//    <>
//     <div className="app-container">
//       <div className="faqs-container">
//         <h1 className="heading">FAQs</h1>
//         <ul className="faqs-list">
//           {faqsList.map(eachFaq => (
//             <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
//           ))}
//         </ul>
//       </div>
//     </div>

//    </>
//   );
// }
