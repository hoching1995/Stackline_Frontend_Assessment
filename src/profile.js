import React from "react";


class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            filtered: "",
            data: "",
            title: "",
            subtitle: "",
            tags: [],
        };
    }

    componentDidMount() {
        var data = this.props.stckline_data[0];
        var image = data['image']
        var title = data['title']
        var subtitle = data['subtitle']
        var tags = data['tags']
        console.log(tags)
        this.setState({ data: data, image: image, title: title, subtitle: subtitle, tags: tags, })
    }


    render() {
        return (
            <div>
                <img src={this.state.image} alt="/#"  style={{width: "100%"
  ,height: "auto", padding: "10px" }} />
                <div className="profile-text">
                    <h3 >{this.state.title}</h3>
                    <h4 >{this.state.subtitle}</h4>
                    <div>
                        {this.state.tags.map((data, i) => {
                            return <h5 key={i}>{data}</h5>
                        })}
                    </div>
                </div>
            </div>

        );
    }
}
export default Graph;