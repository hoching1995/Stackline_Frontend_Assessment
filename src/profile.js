import React from "react";
import { createStore } from 'redux';

class Graph extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     image: "",
    //     //     filtered: "",
    //     //     data: "",
    //     //     title: "",
    //     //     subtitle: "",
    //     //     tags: [],
    //     // };
    // }
    // Original implementation with react state hook 
    // componentDidMount() {
    //     var data = this.props.stckline_data[0];
    //     var image = data['image']
    //     var title = data['title']
    //     var subtitle = data['subtitle']
    //     var tags = data['tags']
    //     this.setState({ data: data, image: image, title: title, subtitle: subtitle, tags: tags, })
    // }
    render() {
        // using redux as requested 
        function datacontroler(state = [], action) {
            switch (action.type) {
                case 'data':
                    return state.concat([action.data])
                default:
                    return state
            }
        }
        const store = createStore(datacontroler)
        var data = this.props.stckline_data[0];
        store.dispatch({
            type: 'data',
            data: data
        })
        return (
            <div>
                <img src={store.getState()[0]['image']} alt="/#" style={{
                    width: "100%"
                    , height: "auto", padding: "10px"
                }} />
                <div className="profile-text">
                    <h3 >{store.getState()[0]['title']}</h3>
                    <h4 >{store.getState()[0]['subtitle']}</h4>
                    <div>
                        {store.getState()[0]['tags'].map((data, i) => {
                            return <h5 key={i}>{data}</h5>
                        })}
                    </div>
                </div>
            </div>

        );
    }
}
export default Graph;