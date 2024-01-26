const errorMsg = ({ items }) => {

    return <div className="main-container error-msg">{items.length === 0 && <h3>I'm Still Hungry.</h3>}</div>
};
export default errorMsg;