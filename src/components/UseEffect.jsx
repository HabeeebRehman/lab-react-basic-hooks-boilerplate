import React , {useEffect , useState} from "react";

const UseEffect = () =>{
    const [ effect , setEffect ] = useState(false);

    useEffect(()=>{
        if (effect) alert("Content Button Clicked");

    },[effect])


return (
    <div>
        {effect? 
        (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore facilis dolorum ea magnam enim eius, error non pariatur quae
                 est consectetur velit unde deserunt recusandae maxime 
                fugit nulla provident aliquid.</p>
        ):null}

        <button onClick={()=> setEffect(!effect)}>Content</button>
    </div>
);

};
export default UseEffect;