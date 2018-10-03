import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          fullName: 'Sylvain',
          color: '',
          movie: [
              "",
              "",
              ""
          ],
          option: ''
      };
      this.array = {
          firstColor: 'Bleu',
          secondColor: 'Red',
          thirdColor: 'Green',
          firstMovie: 'Batman',
          secondMovie: 'Superman',
          thirdMovie: 'Wonder woman',
          option1: 'Fifa',
          option2: 'Dragon ball Z',
          option3: 'Rocket League'
      };
      this.onChange = this.onChange.bind(this);
  }
  handleSubmit = (e) => {
      e.preventDefault();
      var i = 0;
      var a = 0;
      this.state.fullName === '' ? alert("Vous n'avez pas choisi de nom !") : i++;
      for (var j = 0; j <= 2; j++) {
          this.state.movie[j] === '' ? i = i + a : a++;
      }
      a === 0 ? alert("Vous n'avez pas choisi de film !") : i++;
      this.state.color === '' ? alert("Vous n'avez pas choisi de couleur !") : i++;
      this.state.option === '' ? alert("Vous n'avez pas choisi d'option !") : i++;
      i >= 4 ? console.log(this.state.fullName + " " + this.state.movie[0] + " " + this.state.movie[1] + " " + this.state.movie[2] + ' ' + this.state.color + ' ' + this.state.option) : alert("Remplissez tous merci !");
  }
  onChange (e) {
      this.setState({
          fullName: e.target.value,
      });
  }
  box = (e) => {
      var testons = [];
      document.getElementById(e.target.id).style.backgroundColor = (document.getElementById(e.target.id).style.backgroundColor === "red") ? "black" : "red";
      for (var i = 1; i <= 3; i++) {
          testons[i - 1] = (document.getElementById(i.toString()).style.backgroundColor === "red") ? document.getElementById(e.target.className + i.toString()).innerText : ""
      }
      this.setState({
          movie: testons
      });
  }
  radio = (e) => {
      this.setState({
            color: document.getElementById(e.target.className + e.target.id).innerText
      })
      for (var i = 4; i <= 6; i++) {
          document.getElementById(i.toString()).style.backgroundColor = "black";
      }
      document.getElementById(e.target.id).style.backgroundColor = "red";
  }
  reset = (e) => {
      this.setState({
          fullName: "",
          color: '',
          movie: [
              "",
              "",
              ""
          ],
          option: ''
      });
      for (var i = 1; i <= 6; i++) {
          document.getElementById(i.toString()).style.backgroundColor = "black";
      }
  }
  change = (e) => {
      this.setState({
          option: e.target.value
      })
  }
  delete = (e) => {
      document.getElementById("form").remove();
  }
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit} id="form">
                <label>Nom : </label>
                <input type="text" onChange={this.onChange} name="fullName" value={this.state.fullName} />
                <p>Votre film préféré :</p>
                <div id="contenair">
                    <div className="ok" id="1" onClick={e => this.box(e)}></div><label id="ok1">{this.array.firstMovie}</label>
                    <div className="ok" id="2" onClick={e => this.box(e)}></div><label id="ok2">{this.array.secondMovie}</label>
                    <div className="ok" id="3" onClick={e => this.box(e)}></div><label id="ok3">{this.array.thirdMovie}</label>
                </div>
                <p>Votre couleur prefere :</p>
                <div id="contenair2">
                    <div className="radio" id="4" onClick={e => this.radio(e)}></div><label id="radio4">{this.array.firstColor}</label>
                    <div className="radio" id="5" onClick={e => this.radio(e)}></div><label id="radio5">{this.array.secondColor}</label>
                    <div className="radio" id="6" onClick={e => this.radio(e)}></div><label id="radio6">{this.array.thirdColor}</label>
                </div><br />
                <select onChange={this.change}>
                    <option value="">Veuillez choisir le jeu</option>
                    <option value={this.array.option1}>{this.array.option1}</option>
                    <option value={this.array.option2}>{this.array.option2}</option>
                    <option value={this.array.option3}>{this.array.option3}</option>
                </select><br /><br />
                <input type="submit" value="submit" />  
                <button type="button" onClick={e => this.reset(e)}>Reset</button>  
                <button type="button" onClick={e => this.delete(e)}>Supprimer le formulaire</button>  
            </form>
        </div>
    );
  }
}

export default App;
