import React from 'react';

export class ProgressBar extends React.Component {

  get styles() {
    let trackDisplay = 'inline-block';
    let barDisplay = 'inline-block';
    let progress = this.state.progress || '0%';
    let barHeight = this.state.height || '15px';
    let borderWidth = 1;
    let borderUnits = 'px';

    return {
      progress: {
        border: `${borderWidth}${borderUnits}`,
        fontSize: 0,
        position: 'relative',
        height: `${barHeight}`,
        boxSizing: `border-box`
      },

      progressCompleteBarTrack: {
        display: 'inline-block',
        boxSizing: 'border-box',
        position: 'relative',
        height: '100%'
      },

      progressCompleteBarTrackSlice: {
        position: 'relative',
        height: '100%',
        width: '1px',
        display: 'inline-block',
        overflow: 'hidden'
      },

      progressBar: {
        width: `${progress}`,
        display: `${barDisplay}`,
      },

      progressBarDivSlice1: {
        backgroundColor: 'hsl(240, 50%, 60%)',
        width: '1px'
      },

      progressBarDivSlice2: {
        width: '1px',
        backgroundImage: `linear-gradient(180deg,
          hsl(240, 50%, 60%) 10%,
          hsl(240, 100%, 80%) 20%,
          hsl(240, 100%, 90%) 30%,
          hsl(0, 0%, 93%) 40%,
          hsl(0, 0%, 93%) 50%,
          hsl(0, 0%, 93%) 60%,
          hsl(240, 100%, 90%) 70%,
          hsl(240, 100%, 80%) 80%,
          hsl(240, 50%, 60%) 90%,
          hsl(240, 50%, 40%) 100%
        )`
      },

      progressBarDivSliceN: {
        width: 'calc(100% - 5px)',
        backgroundImage: `linear-gradient(180deg,
          hsl(240, 50%, 40%) 10%,
          hsl(240, 50%, 60%) 20%,
          hsl(240, 100%, 80%) 30%,
          hsl(240, 100%, 90%) 40%,
          hsl(0, 0%, 93%) 50%,
          hsl(240, 100%, 90%) 60%,
          hsl(240, 100%, 80%) 70%,
          hsl(240, 50%, 60%) 80%,
          hsl(240, 50%, 40%) 90%,
          hsl(240, 100%, 16%) 100%
        )`
      },

      progressBarDivSlice3: {
        width: '1px',
        backgroundImage: `linear-gradient(180deg,
          hsl(240, 50%, 40%) 10%,
          hsl(240, 50%, 60%) 20%,
          hsl(240, 100%, 80%) 30%,
          hsl(240, 100%, 90%) 40%,
          hsl(240, 100%, 90%) 50%,
          hsl(240, 100%, 90%) 60%,
          hsl(240, 100%, 80%) 70%,
          hsl(240, 50%, 60%) 80%,
          hsl(240, 50%, 40%) 90%,
          hsl(240, 100%, 16%) 100%
        )`
      },

      progressBarDivSlice4: {
        width: '1px',
        backgroundImage: `linear-gradient(180deg,
          hsl(240, 50%, 40%) 10%,
          hsl(240, 50%, 60%) 20%,
          hsl(240, 50%, 40%) 30%,
          hsl(240, 50%, 40%) 40%,
          hsl(240, 50%, 40%) 50%,
          hsl(240, 50%, 40%) 60%,
          hsl(240, 50%, 40%) 70%,
          hsl(240, 50%, 40%) 80%,
          hsl(240, 50%, 40%) 90%,
          hsl(240, 100%, 16%) 100%
        )`
      },

      progressBarDivSlice5: {
        width: '1px',
        backgroundImage: `linear-gradient(180deg,
          hsl(240, 50%, 40%) 10%,
          hsl(240, 100%, 16%) 20%,
          hsl(240, 100%, 16%) 30%,
          hsl(240, 100%, 16%) 40%,
          hsl(240, 100%, 16%) 50%,
          hsl(240, 100%, 16%) 60%,
          hsl(240, 100%, 16%) 70%,
          hsl(240, 100%, 16%) 80%,
          hsl(240, 100%, 16%) 90%,
          hsl(240, 100%, 16%) 100%
        )`
      },

      progressTrack: {
        width: `calc(100% - ${progress})`,
        display: `${trackDisplay}`
      },

      progressTrackDivBarBorder: {
        backgroundColor: 'hsl(0,0,0)',
        width: '1px'
      },

      progressTrackDivBarShadow: {
        backgroundColor: 'hsl(0,0,33%)',
        width: '1px'
      },

      progressTrackDivTrackStart: {
        backgroundColor: 'hsl(0,0,53%)'
      },

      progressTrackDivTrackMiddle: {
        width: 'calc(100% - 4px)',
        backgroundImage: `linear-gradient(180deg,
          hsl(0, 0, 53%) 10%,
          hsl(0, 0, 73%) 20%,
          hsl(0, 0, 73%) 30%,
          hsl(0, 0, 73%) 40%,
          hsl(0, 0, 73%) 50%,
          hsl(0, 0, 73%) 60%,
          hsl(0, 0, 73%) 70%,
          hsl(0, 0, 73%) 80%,
          hsl(0, 0, 73%) 90%,
          hsl(0, 0, 53%) 100%
        )`
        /*
        hsl(0, 0, 73%) 10%,
        hsl(0, 0, 87%) 20%,
        hsl(0, 0, 87%) 30%,
        hsl(0, 0, 87%) 40%,
        hsl(0, 0, 87%) 50%,
        hsl(0, 0, 87%) 60%,
        hsl(0, 0, 87%) 70%,
        hsl(0, 0, 87%) 80%,
        hsl(0, 0, 87%) 90%,
        hsl(0, 0, 87%) 100%
        */
      }
    }
  }

  progressBarStyle(percent) {
    percent = percent < 0 ? 0 : (percent > 100 ? 100 : percent);

    let progress = percent + '%';
    let trackDisplay = percent > 99 ? 'none' : 'inline-block';
    let barDisplay = percent < 1 ? 'none' : 'inline-block';

    return {
      progressBar: {
        width: `${progress}`,
        display: `${barDisplay}`
      },

      progressTrack: {
        width: `calc(100% - ${progress})`,
        display: `${trackDisplay}`
      },

      // TODO finish schemes from http://codepen.io/nyteshade/pen/zqmBXZ
    }
  }

  static get defaultProps() {
    return {

    };
  }
}
