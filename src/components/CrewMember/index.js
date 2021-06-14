import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class CrewMember extends Component {
  render() {
    const { member, onUp, onDown } = this.props;
    const { name, login } = member;
    return (
      <div className="CrewMember-container" data-testid={`crew-member-container-${login.uuid}`} >
        <div className="CrewMember-info" >
          <div className="CrewMemeber-photo" style={{ backgroundImage: `url(${member.picture.medium})` }} data-testid={`crew-member-photo-${login.uuid}`} />
          <div className="CrewMemeber-name" data-testid={`crew-member-info-text-${login.uuid}`} >
            <div>{`${name.first} ${name.last}`}</div>
            <div>{member.location.city}</div>
          </div>
        </div>
        <div className="CrewMember-toolbar">
          {onDown && <button onClick={onDown} type="button" data-testid="button-down-satge">&lt;</button>}
          {onUp && <button onClick={onUp} className="CrewMember-up" type="button" data-testid="button-up-satge">&gt;</button>}
        </div>
      </div>
    );
  }
}

CrewMember.defaultProps = {
  member: null,
  onUp: null,
  onDown: null,
};

CrewMember.propTypes = {
  member: PropTypes.object,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
};

export default CrewMember;
