import React from 'react';
import VolumeIcon from  '../../icons/components/volume';
import VolumeMuteIcon from  '../../icons/components/volume-mute';
import './volume.css';

function Volume(props){
	return(
				<button
					className="Volume"
				>
					<div
						onClick={props.handleVolumeClick}
					>
					{
						props.volume > 0 ? 
						<VolumeIcon
							color="white"
							size={25}
						/>
						:
						<VolumeMuteIcon
							color="white"
							size={25}
						/>

					}
					
					</div>
					<div className="Volume-range">
						<input 
							type="range"
							min={0}
							max={1}
							step={.05}
							onChange={props.handleVolumeChange}
						/>
					</div>
				</button>
		)
}

export default Volume;