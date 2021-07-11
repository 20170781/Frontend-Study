import React, { PureComponent } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends PureComponent {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul className="habits">
          {this.props.habits_li.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
