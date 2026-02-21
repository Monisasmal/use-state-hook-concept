import { Component, useState, useEffect } from "react";



// Intodunction of useState:-----------------------------

function Defination(){
  return(
    <div style={{background:"pink", padding:"10px", borderRadius:"5px"}}>
      <h2>🧭 What is useState?</h2>
      <p>useState is a react hook that allow u to add state to functional function.</p>
      <p>👉 State means “data that can change over time” in your component.</p>
          <ul>
            <li>state → the current value of the state.</li> 
            <li>setState → the function used to update the state.</li>
            <li>initialValue → the value your state starts with.</li>
          </ul>
    <p>⚡ Whenever setState is called, the component re-renders with the new state value.</p>
    </div>

  )
}

// 1. Counter App ----------------------------------------------------------------------------------------

function Counter() {
  const [count, setCount] = useState(0);

  // 👉 Define a function to get color based on count value
  const getColor = () =>{
    if(count === 0) return "#000";
    if(count > 0 && count < 5) return "green";
    if(count > 5 && count < 10) return "Red";
  }

  const container = { textAlign: "center", padding: "60px" };
  const btn = {padding:"10px,20px", margin:"5px", background:"#6200ea", color:"#fff", border:"none",  borderRadius:"5px", cursor:"pointer",}

  return (
    <div style={container}>
      <h1 style={{color:getColor()}}>Counter:{count}</h1>
      <button style={btn} onClick={() => setCount(count + 1)}>+</button>
      <button style={btn}
        onClick={() => {if (count > 0) setCount(count - 1) }}>-</button>
      <button style ={btn} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}


// 2.  show/hide text-----------------------------------------------------------------------------------

function ShowHide(){
  const[show,setShow] = useState(false);
  const container = {textAlign:"center", padding:"60px"}
  const btn = {padding: "10px 20px",
    background: "#03a9f4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  // marginTop:"20px"
  }

  const text ={
    fontSize:"50px",
  }

    return(
      <div style={container}>
        <p style={text}>😀😊</p>
        {show && <h1>Hello Moni👋</h1>}
        <button style={btn} onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Text
        </button>
      </div>
    )
}

// 3. Form Submission:-----------------------------------------------------------------------------

function HandleForm(){
  const[data, setData] = useState("");
  const[email,setEmail] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Hello ${data} my Email is ${email}`);
    setData("");
    setEmail("");
  }
   const container = {textAlign:"center", padding:"60px"}
  const btn = {padding: "10px 20px",
    background: "#03a9f4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop:"20px",}
  const input = {
    padding:"10px 20px",
    fontSize:"16px",
    border: "1px solid #868686ff",
    borderRadius: "5px",
    marginTop:"10px",
    }
  return(
    <div style={container}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" style={input} value={data} onChange={(e) => setData(e.target.value)} placeholder="Enter your Name"/><br/>
        <input type="email" style={input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/><br/>
        <button style={btn} type="submit">Submit</button>
      </form>
    </div>
  )
}


// 4. Background Color Picker---------------------------------------------------------------------------

function ColorPicker(){
  const[color,setColor] = useState("#ffffff");
  const container = {
    background: color,
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width:"60vw",
  };
  const input ={
    padding:"20px",
  }
  return(
    <div style={container}>
      <h1>Select a Color</h1>
      <input style={input} type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  )
}

// 5. Character Count:-------------------------------------------------------------

function CountChar(){
  const[text,setText] = useState("");
  const container = { textAlign: "center", padding: "60px" };
  const textarea = {height:"100px", width:"300px", padding:"10px"};
  const para = {fontSize:"18px", fontWeight:"bold"};
  const btn = {
    padding: "10px 15px",
    background: "#673ab7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
  return(
    <div style={container}>
      <h1>Character Counter ✍️</h1>
      <textarea style={textarea} value={text} onChange={(e) => setText(e.target.value)} placeholder="Write ur Dream here"/>
        <p style={para}>Character Count: {text.length}</p>
        <button  style={btn} onClick={() => setText("")}>Clear</button>
    </div>
  )
}


// 6. ToDo List----------------------------------------------------------------------------------------

function ToDo(){
  const[text, setText] = useState("");
  const[list, setList] = useState([]);
  const container = {textAlign: "center", padding: "60px"};
  const input = {padding: "10px", margin: "5px", border:"3px solid red", borderRadius:"4px",};
  const btn = {
    padding: "10px 15px",
    background: "#673ab7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
  const item = {
    display:"flex",
    width:"250px",
    margin:"10px auto",
    justifyContent:"space-between",
    padding:"10px",
    background: "#c4c4c4ff",
    borderRadius: "5px",
  }
  return(
    <div style={container}>
      <h2>Todo List ✅</h2>
      <input type="text" style={input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter ur Todo"/>
      <button style={btn} onClick={() =>{
        if(text.trim() !== ""){
          setList([...list, text]);
          setText("");
        }
      }}>Add</button>

      {list.map((ele, id) => (
        <div key={id} style={item}>{ele}
        <button style={{...btn, background:"red", padding:"5px 10px"}} 
        onClick={() => setList(list.filter((_, index) => index !== id))}> X </button>
        </div>
      ))}
    </div>
  )
}


// 7. Dark/Light :----------------------------------------------------------------------------

function DarkLight(){
  const[dark, setDark] = useState(false);
  const container = {background: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000", textAlign: "center", padding: "60px", transition: "0.5s", height:"50vh", width:"50vw"}
    const btn={
      background: dark?"#fff":"#000",
      color: dark?"#000":"#fff",
      border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    }
  return(
    <div style={container}>
      <h1>{dark ?"Dark Mode 🌙" :"Light Mode ☀️"}</h1>
      <button style={btn} onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  )
}

// 8. Show/Hide Password:---------------------------------------------------------------------------

function PasswordHide(){
  const[show,setShow] = useState(false);
  const[password, setPassword] = useState("");
  const container = { textAlign: "center", padding: "60px"};
  const input = { padding: "10px", fontSize: "16px" };
  const btn ={padding: "10px 15px",
    marginLeft: "10px",
    background: "#03a9f4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop:"20px"}
  return(
    <div style={container}>
      <h1>Password Show / Hide 🔐</h1>
      <input type={show ? "text" : "password"} style={input} value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
      <button style={btn} onClick={() => setShow(!show)}>
        {show ? "Hide" :"Show"}
      </button>
    </div>
  )
}

// 9. Change Font Size:---------------------------------------------------------------------------

function ChangeFontSize(){
  const[size, setSize] = useState(16);
  const container = { textAlign: "center", padding: "60px"};
  const btn ={padding: "10px 15px",
    marginLeft: "10px",
    background: "#03a9f4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop:"20px"}
    const textStyle = {
      fontSize:`${size}px`,
      // transition: "0.3s",
      color: "#333",
      fontWeight:"bold"
    }
  return(
    <div style={container}>
      <h1>➕Change Font Size➖</h1>
       <p style={textStyle}>Hello Manaswini({size}px)</p>
      <button style={btn} onClick={() => setSize(size + 4)}>Increase Size➕</button>
      <button style={btn} onClick={() => {if(size > 16) setSize(size - 4)}}>Decrease Size ➖ </button>
      <button style={btn} onClick={() => setSize(16)}>Reset</button>
    </div>
  )
}


// 10. Random Background/Text:--------------------------------------------------------------------------

function RandomBg(){
  const[bg,setBg] = useState("#ffffff");
  const[text,setText] = useState("#000000");

  const container = {
    textAlign: "center",
    padding: "80px",
    background: bg,
    color: text,
    transition: "all 0.5s ease",
  };

  const btn = {
    padding: "12px 20px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "20px 10px",
  };

  const getRandomColor =() =>{
    return "#"+Math.floor(Math.random() * 255)
  }

  const handleChangeColor = () => {
    setBg(getRandomColor());
    setText(getRandomColor());
  }

  const reset = () =>{
    setBg("#ffffff");
    setText("#000000");
  }
  return(
    <div style={container}>
      <h1>🔄 Random Background & Text Color</h1>
      <button style={btn} onClick={handleChangeColor}> Change Color</button>
      <button style={btn} onClick={reset}>Reset</button>
    </div>
  )
}

// 11. Real time Clock using useState and useEffect:-------------------------------------------------------------

function RealTime(){
  const[time,setTime] = useState(new Date().toLocaleTimeString());

  const container = {
    textAlign: "center",
    padding: "80px",
    background: "blue",
    color:"white",
    transition: "all 0.5s ease",
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000);
    return () => clearInterval(interval);
  },[]);

  return(
    <div style={container}>
      <h1>🕒 Real-Time Clock</h1>
       <h2>{time}</h2>
    </div>
  )
}


// Intermediate:-------------------------------------------------------------------------------
// Login Validate Form:--------------------------------------------------------------------------------

function LoginForm(){
  const[userName ,setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState({});
  const[showPassword,setShowPassword] = useState(false);
  const[submittedData, setSubmitedData]  = useState(null);
  const[sucessMessage, setSucessMessage] = useState("");

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleUsernameChange = (e) =>{
    const value = e.target.value;
    setUsername(value);

    setError((prev) => ({
      ...prev,
      userName: value.trim()? "": "Username is required"
    }))
  }

  const handlePasswordChange = (e) =>{
    const value = e.target.value;
    setPassword(value);

    let errorMsg = "";
    if(!value.trim()){
      errorMsg= "Password is Required"
    }else if(!passwordPattern.test(value)){
      errorMsg = "Password must contain: letter + number + special char, min 8 chars."
    }
    setError((prev) =>({
      ...prev,
      password:errorMsg
    }))
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(error.userName || error.password || !userName || !password) return;
     setSucessMessage("");

     setTimeout(()=>{
      setSubmitedData({userName,password});
      setUsername("");
      setPassword("");
      setError({});
      setSucessMessage("🎉 Login Successful!");

      setTimeout(()=>{
        setSucessMessage("");
      },1000);

      setTimeout(()=>{
        setSubmitedData("");
      },3000)
     },1000);
     
  }

  const isFormValid = userName.trim() !== "" &&
    password.trim() !== "" &&
    password.length >= 6 &&
    !error.userName &&
    !error.password;


  return(<div style={styles.container}>
      <h2>🧍 Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <input type="text" placeholder="Enter UserName" value={userName} onChange={handleUsernameChange} style={styles.input}/>
        {error.userName && <p style={styles.error}>{error.userName}</p>}

        <div style={styles.passwordContainer}>
          <input type={showPassword ? "text" : "password"} placeholder="Enter ur Password" value={password}  onChange={handlePasswordChange}  style={{ ...styles.input, marginBottom: 0 }} />
          <label style={styles.showPassword}>
            <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>{" "}
            Show Password
          </label>
        </div>
        {error.password && <p style={styles.error}>{error.password}</p>}

        <button type="submit" style={{...styles.button,
            background: isFormValid ? "#4caf50" : "#aaa",
            cursor: isFormValid ? "pointer" : "not-allowed",}} disabled={!isFormValid}>Submit</button>

            {sucessMessage && <p style={styles.success}>{sucessMessage}</p>}

            {submittedData && (
              <div style={styles.output}>
                <h3>✅ Stored Data:</h3>
                <p>
            <strong>Username:</strong> {submittedData.userName}
          </p>
          <p> <strong>Password:</strong>{submittedData.password}</p>
              </div>
            )}
      </form>
  </div>)
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    width: "300px",
    margin: "0 auto",
  },
  input: {
    padding: "10px",
    width: "100%",
    fontSize: "16px",
  },
  passwordContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  showPassword: {
    fontSize: "14px",
    marginTop: "5px",
    textAlign: "left",
  },
  button: {
    padding: "10px 15px",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: "13px",
    margin: 0,
    textAlign: "left",
    width: "100%",
  },
  success: {
    color: "green",
    fontSize: "15px",
    marginTop: "15px",
  },
  output: {
    marginTop: "20px",
    background: "#f0f0f0",
    padding: "15px",
    borderRadius: "8px",
  },
  
};

// Shopping Cart:--------------------------------------------------------------------------

function ShoppingCart(){
const products = [
  { id: 1, name: "Burger", price: 120 },
  {id:2, name:"Pizza", price:200},
  {id:3, name:"Gupchup", price:60},

]
const[cart,setCart] = useState({});

function addItem(product){
setCart(prev =>{
  const prevQty = prev[product.id]?.qty || 0;
  return {...prev, [product.id]:{product, qty:prevQty + 1}};
});
}

function removeItem(productId){
  setCart(prev =>{
    const item = prev[productId]
    if (!item) return prev;
    if(item.qty <= 1){
      // eslint-disable-next-line no-unused-vars
      const {[productId] : removed, ...rest} = prev;
      return rest;
    }
    return {...prev, [productId]:{...item,qty: item.qty - 1 }}
  })
}

function clearCart(){
  setCart({});
}

const totalItem = Object.values(cart).reduce((sum,id) => sum + id.qty, 0);
const totalPrice = Object.values(cart).reduce((sum,id) => sum + id.qty * id.product.price,0);


return(
  <div style={cartstyles.main}>
    <div style={cartstyles.box}>
      <h2>Menu</h2>
      {
        products.map(p => (
          <div key={p.id} style={cartstyles.item}>
            <span>{p.name}- ₹{p.price}</span>
         
          <div>
          <button style={cartstyles.btn} onClick={() => removeItem(p.id)}>-</button>
          <span>{cart[p.id]?.qty || 0}</span>
          <button style={cartstyles.btn} onClick={() => addItem(p)}>+</button>
          </div>
           </div>
        ))
      }
    </div>

    <div style={cartstyles.box}>
       <h2>Cart ({totalItem})</h2>
       {totalItem === 0 ?( <p>Your cart is empty</p>) : (
        Object.values(cart).map(({product,qty}) => (
          <div key={product.id} style={styles.item}>
            <span>{product.name} × {qty}</span>
            <span>₹{product.price * qty}</span>
          </div>
        ))
       )}
       <hr/>
       <p><b>Total:</b> ₹{totalPrice}</p>
       <button style={cartstyles.clear} onClick={clearCart}>Clear Cart</button>
    </div>
  </div>
)
}

const cartstyles = {
   main:{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
   },
   box:{
  background: "pink",
  padding: "15px",
  borderRadius: "10px",
  width: "300px"
   },
   item:{
    display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "8px 0"
   },
   btn:{
    padding:"5px 10px",
    margin:"0px 5px",
    cursor:"pointer"
   },
   clear:{
    width: "100%",
  background: "red",
  color: "white",
  border: "none",
  padding: "8px",
  marginTop: "10px",
  cursor: "pointer"
   },
   
}


// all the project list----------------------------------------------------------------------------------
const projects = [
  {
    category: "Basic",
    items: [
      { id: 1, name: "Introduction", Component: <Defination /> },
      { id: 2, name: "Counter", Component: <Counter /> },
      { id: 3, name: "Show/Hide", Component: <ShowHide /> },
      { id: 4, name: "Login Form", Component: <HandleForm /> },
      { id: 5, name: "Color Picker", Component: <ColorPicker /> },
      { id: 6, name: "Count Character", Component: <CountChar /> },
      { id: 7, name: "ToDo", Component: <ToDo /> },
      { id: 8, name: "DarkLight Mode", Component: <DarkLight /> },
      { id: 9, name: "Show/Hide Password", Component: <PasswordHide /> },
      { id: 10, name: "Font Size Change", Component: <ChangeFontSize /> },
      { id: 11, name: "Random BG", Component: <RandomBg /> },
      { id:12, name:"Real Time Clock", Component:<RealTime/>}
    ],
  },
  {
    category: "Intermediate",
    items: [
      {id:13, name:"Validated Login Form", Component:<LoginForm/>},
      {id:14, name:"Cart", Component:<ShoppingCart/>},
    ],
  },
  
];


export default function App() {
  const [activeProject, setActiveProject] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Responsive handling for hamburger
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarStyle = {
    width: "250px",
    background: "#6200ea",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    position: "fixed",
    left: isMobile ? (isSidebarOpen ? "0" : "-260px") : "0",
    top: 0,
    bottom: 0,
    overflowY: "auto",
    transition: "left 0.3s ease",
    zIndex: 2000,
  };

  const hamburgerStyle = {
    position: "fixed",
    top: 20,
    left: 20,
    background: "#6200ea",
    color: "#fff",
    border: "none",
    padding: "10px 12px",
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: 2500,
    display: isMobile ? "block" : "none",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: isMobile && isSidebarOpen ? "block" : "none",
    zIndex: 1500,
  };

  const contentStyle = {
    flex: 1,
    marginLeft: isMobile ? "0" : "250px",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "margin-left 0.3s ease",
    background: "#ffffffff",
    minHeight: "80vh",
    minWidth:"70vw"
  };

  const menuBtn = (isActive) => ({
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "8px 12px",
    background: isActive ? "#fff" : "#3700b3",
    color: isActive ? "#000" : "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "8px",
    transition: "0.3s",
  });

  const allItems = projects.flatMap((p) => p.items);
  const active = allItems.find((p) => p.id === activeProject)?.Component;

  return (
    <>
      <div style={overlayStyle} onClick={toggleSidebar}></div>
      <button style={hamburgerStyle} onClick={toggleSidebar}>
        ☰
      </button>

      <aside style={sidebarStyle}>
        <h2 style={{ textAlign: "center" }}>📂 useState Projects</h2>
        {projects.map((group) => (
          <div key={group.category}>
            <div style={{ fontWeight: "bold", marginBottom: 10 }}>
              {group.category}
            </div>
            {group.items.map((item) => (
              <button
                key={item.id}
                style={menuBtn(activeProject === item.id)}
                onClick={() => {
                  setActiveProject(item.id);
                  if (isMobile) toggleSidebar();
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main style={contentStyle}>{active}</main>
    </>
  );
}
