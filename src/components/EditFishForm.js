import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      // [] allow you to update by the name of the input field
      [event.currentTarget.name]: event.currentTarget.value
    };
    // Index is the key passed down from Inventory
    updatedFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}

export default EditFishForm;
