import React from "react";
import { useState } from "react";
import { GoChevronRight,GoChevronDown } from "react-icons/go";
const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "bin",
          children:[
            {
              name: "acorn"
            },
            {
              name:'css'
            }
          ]
        },
        
      ],
    },
    {
      name: "public",
      children: [
        {
          name: "index.html",
        },
        {
          name: "index.js",
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "App.js",
        },
        {
          name:'components',
          children:[
            {
              name:'header'
            },
            {
              name:'hero-section'
            },
            {
              name:'navbar'
            },
            {
              name:'footer'
            }

          ]
        },
        {
          name:'screens'
        },
        {
          name:'assets'
        }
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "package-lock.json",
    },
  ],
};
const Entry = ({entry,depth}) => {
  const [isExpanded, setisExpanded] = useState(false)
  return (
  <div >
    {entry.children ?(
    <div className="entry" onClick={() => setisExpanded(!isExpanded)}>
    {isExpanded ?<GoChevronDown /> : <GoChevronRight />}
    {entry.name}
    </div>
    ) : (
      <div>{entry.name}</div>
    )
}
    {isExpanded &&
    <div style={{paddingLeft:`${depth * 26}px`} }>
    {entry.children?.map((entry)=>
      <Entry entry = {entry} depth={depth +1} />
    )}
    </div>
    }
  </div>
  );
};
const App = () => {
  return (
    <div className="name">
      
      {files.children.map((entry) => (
        <Entry entry = {entry} depth ={1}/>
      ))}
    </div>
  );
};

export default App;
