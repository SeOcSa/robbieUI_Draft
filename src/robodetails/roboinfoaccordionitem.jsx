import React, { Component } from "react";

class RoboInfoAccordionItem extends Component {
  state = {
    opened: false
  };

  renderClass() {
    let classes = "accordion-item ";

    return this.state.opened ? classes + "accordion-item-opened" : classes;
  }

  handleAccordionItemOnClick() {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  render() {
    const {
      props: { paragraphTitle, paragraph, title }
    } = this;

    return (
      <div
        className={this.renderClass()}
        onClick={this.handleAccordionItemOnClick.bind(this)}
      >
        <div className="accordion-item-line">
          <h3 className="accordion-item-title">{title}</h3>
          <span className="accordion-item-icon" />
        </div>
        <div className="accordion-item-inner">
          <div className="accordion-item-content">
            <p className="accordion-item-paragraph-title">{paragraphTitle}</p>
            <p className="accordion-item-paragraph">{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RoboInfoAccordionItem;
