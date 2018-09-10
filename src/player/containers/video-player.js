import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import { formatTime } from'../../utilities/time';
import { IsFullScreen,
		RequestFullScreen,
		ExitFullScreen
		} from'../../utilities/browser';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import { connect } from 'react-redux';

class VideoPlayer extends Component{
	state={
		pause:true,
		duration: 0,
		durationStr: '00',
		currentTime: 0,
		currentTimeStr: '00',
		loading: false,
		lastVolumeState: 1,
		volume: 1
	}

	togglePlay = (event) =>{
		this.setState({
			pause: !this.state.pause
		})
	}

	componentDidMount(){
		this.setState({
			pause:(!this.props.autoplay)
		})
	}

	handleLoadedMetadata = event =>{
		this.video = event.target;
		this.setState({
			duration: this.video.duration,
			durationStr: formatTime(this.video.duration)
		})
	}

	handleTimeUpdate = event =>{
		this.setState({
			currentTime: this.video.currentTime,
			currentTimeStr: formatTime(this.video.currentTime)
		})
	}

	handleProgressChange= event =>{
		this.video.currentTime = event.target.value;
	}

	handleSeeking = event =>{
		this.setState({
			loading: true
		})
	}

	handleSeeked = event =>{
		this.setState({
			loading: false
		})
	}

	handleVolumeChange = event=>{
		this.video.volume = event.target.value;
		this.setState({
			lastVolumeState: this.video.volume,
			volume: this.video.volume
		})
	}

	handleVolumeClick = event =>{
		if(this.video.volume > 0){
			this.video.volume = 0;
		}
		else{
			this.video.volume = this.state.lastVolumeState;
		}
		this.setState({
			volume: this.video.volume
		})
	}

	handleFullScreenClick = event =>{
		if(!IsFullScreen()){
			RequestFullScreen(this)
		}else{
			ExitFullScreen()
		}
	}

	setRef= element =>{
		this.player = element
	}

	render(){
		return(
				<VideoPlayerLayout
					setRef={this.setRef}
				>
					<Title
						title={this.props.media.get('title')}
					/>
					<Controls>
						<PlayPause
							pause={this.state.pause}
							handleClick={this.togglePlay}
						/>
						<Timer
							duration={this.state.durationStr}
							currentTime={this.state.currentTimeStr}
						/>
						<ProgressBar
							duration={this.state.duration}
							value={this.state.currentTime}
							handleProgressChange={this.handleProgressChange}
						/>
						<Volume
							handleVolumeChange={this.handleVolumeChange}
							handleVolumeClick={this.handleVolumeClick}
							volume={this.state.volume}
						 />
						 <FullScreen
						 	handleFullScreenClick={this.handleFullScreenClick}
						 />
					</Controls>
					<Spinner
						active={this.state.loading}
					/>
					<Video
						autoplay={this.props.autoplay}
						pause={this.state.pause}
						handleLoadedMetadata={this.handleLoadedMetadata}
						handleTimeUpdate={this.handleTimeUpdate}
						handleSeeking={this.handleSeeking}
						handleSeeked={this.handleSeeked}
						src={this.props.media.get('src')}
					/>
				</VideoPlayerLayout>
			)
	}
}

function mapStateToProps(state, props){
	return{
		media: state.get('data').get('entities').get('media').get(props.id)
	}
}

export default connect(mapStateToProps)(VideoPlayer);
