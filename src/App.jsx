import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import { TabButton } from './components/TabButton.jsx';
import { useState } from 'react';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components' , 'jsx' , 'prop' , 'state'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

  let tabContent = <p> Please select a topic </p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           { /* Outputting list data dynamically */}
            { CORE_CONCEPTS.map((conceptItem) => ( <CoreConcepts key={conceptItem.title} {...conceptItem}/>))}
          { /*
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} /> #spread operator 
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> 
            */   }
          </ul>
        </section>
        <section id='examples'>
          <menu>
            {/* Passing function as values to Props */}
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          { /*  Rendering the content conditionally
            !selectedTopic ? ( <p> Please select a topic </p> ) :
            (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
            ) */
          }
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
