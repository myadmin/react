var SetIntervalMixins = {
	componentWillMount: function () {
		this.intervals = [];
	},
	setInterval: function () {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function () {
		this.intervals.map(clearInterval);
	}
};

var TickTok = React.createClass({
	mixins: [SetIntervalMixins],
	getInitialState: function () {
		return {
			seconds: 0
		}
	},
	componentDidMount: function () {
		this.setInterval(this.tick, 1000);
	},
	tick: function () {
		this.setState({
			seconds: this.state.seconds + 1
		})
	},
	render: function () {
		return (
			<p>React has been running for {this.state.seconds} seconds.</p>
		);
	}
});

var dom = ReactDOM.render(
	<TickTok />,
	document.getElementById("app")
);