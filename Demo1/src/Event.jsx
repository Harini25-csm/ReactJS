import { Component } from "react";
class Events extends Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
        this.doubleClick = this.doubleClick.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.change = this.change.bind(this);
        this.key = this.key.bind(this);
        this.submit = this.submit.bind(this);
    }
    click() {
        alert("Button Clicked");
    }
    doubleClick() {
        alert("Double Click");
    }
    mouseOver() {
        alert("Mouse Over");
    }
    mouseOut() {
        alert("Mouse Out");
    }
    change(event) {
        alert(event.target.value);
    }
    key(event) {
        console.log(event.key);
    }
    submit(event) {
        event.preventDefault();
        alert("Form Submitted");
    }
    render() {
        return (
            <div>
                <hr/>
                <button onClick={this.click}>
                    Click
                </button>
                <button onDoubleClick={this.doubleClick}>
                    Double Click
                </button>
                <h2
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}>
                Move Mouse Here
                </h2>
                <input
                type="text"
                onChange={this.change}
                onKeyDown={this.key}/>
                <form onSubmit={this.submit}>
                    <input type="submit"/>
                </form>
                <hr/>
            </div>
        );
    }
}
export default Events;