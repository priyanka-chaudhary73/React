import MyComponentC from './MyComponentC.jsx';

function MyComponentB() {
    return (
        <div className="box">
            <h1>MyComponentB</h1>
            <MyComponentC />
        </div>
    );
}

export default MyComponentB;
