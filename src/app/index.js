var React = require('react');
var ReactDOM=require('react-dom');
var createReactClass = require('create-react-class');

var TodoComp = createReactClass({

    getInitialState: function(){

        return {
            tool: ['Wand', 'Gun', 'Knife', 'Missle']
        }
    },

    render: function(){

        var localList = this.state.tool;
        
        localList  = localList.map(function(item,index){
            return (
               <TodoItem item={item} key={index} onDelete={this.onDelete} />
            );
        }.bind(this));

        return (
            <div className = "todo-comp">
            <h1>{this.props.wmsg}</h1>
            <ol>
                    {localList}
            </ol>
            </div>
        );
    },
    onDelete: function(item){

        var filteredList = this.state.tool.filter(function(value,index){

            return value !== item;

        });

        this.setState({

            tool: filteredList
        });
    
       }
    

});


var TodoItem = createReactClass({
   render: function(){
      
        var style = {
            color: 'blue',
            fontSize: 30
          };

          var style1 = {
            color: 'RED',
            fontSize: 30
          };
        return(
      <li>
       <div className="todo-item">
                    <span style={style} className="todo-name">
                         {this.props.item}
                    </span>
                    <span style={style1} className ="todo-Delete" onClick= {this.handleDelete} > X </span>
                </div>
            </li>
        );
    },

    handleDelete: function(){
        this.props.onDelete(this.props.item);    
    }

});


ReactDOM.render(<TodoComp wmsg="Hi EveryOne , I sell the following weapons"/>,document.getElementById("todo"));