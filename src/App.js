import logo from './logo.svg';
// import './App.css';
// import ParentComp from './components/ParentComp';

// import First from './components/first'
//import First from './components/Stylesheet'
//import Stylesheet from './components/Stylesheet';
//import Form from './forms/Form';
//import Inline from './Styling/Inline';
//import Myfragment from './components/Myfragment';
// import Table from './components/Table';
// import LifeCycleA from './components/LifeCycleA';
// import Refsdemo from './components/Refsdemo';
// import Refsold from './components/RefsOld';
// import FRParentinput from './components/FRParentinput'
// import Portaldemo from './Portaldemo'; 
// import Portal2 from './Portal2';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter':
import Counter from './components/Counter';
import  Hover2 from './components/Hover2';
import ClickCounter2 from './components/ClickCounter2';



function App() {
  return (
    <div className="App">

      {/* <First/> */}
      {/* <Stylesheet/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <Form/> */}
      {/* <Inline/> */}
      {/* <Myfragment/> */}
      {/* <Table/> */}
      {/* <LifeCycleA/> */}
      {/* <ParentComp/> */}
      {/* <Refsdemo/> */}
      {/* <Refsold/>  */}
      {/* <FRParentinput/> */}
      {/* <Portaldemo/> */}
      {/* <Portal2/> */}


      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker"></Hero>
      </ErrorBoundary> */}

      {/* <ClickCounter/>
      <HoverCounter/> */}

     <Counter render={(count,increamentCount)=> (<ClickCounter2 count={count} increamentCount={increamentCount}/>)}/>


<Counter render={(count,increamentCount)=> (<Hover2 count={count} increamentCount={increamentCount}/>)}/>

    </div>
  );
}

export default App;
