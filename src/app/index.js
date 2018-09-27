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
               <TodoItem item={item} key={index}/>
            );
        });

        return (
            <div>
            <h1>{this.props.wmsg}</h1>
            <ol>
                    {localList}
            </ol>
            </div>
        );
    }

});


var TodoItem = createReactClass({

    render: function(){
      
        var style = {
            color: 'blue',
            fontSize: 20
          };
        return(

            <li>
       <div className="todo-item">
    


                    <span style={style} className="todo-name">
                         {this.props.item}
                    </span>
                </div>

            </li>

        );
    }

});


ReactDOM.render(<TodoComp wmsg="Hi EveryOne , I sell the following weapons"/>,document.getElementById("todo"));