import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {

    render() {
        // colors: color 배열
        // selected: 선택여부
        // onSelect: 컬러선택함수
        const { colors, selected, onSelect } = this.props;

        const colorsList = colors.map(
            (color) => (
                <Color
                    color={color}
                    onClick={()=>onSelect(color)}
                    active={selected===color}
                    key={color}
                />
            )
        )

        return (
            <div className="palette">
                {colorsList}
            </div>
        )
    }
}

// color: 박스에 보여줄 color
// onClick: 클릭하면 실행될 함수
// active: true이면 현재 선택된 상태
const Color = ({ color, active, onClick }) => {
    return (
        <div className={`color ${active? ' active': ''}`} 
        style={{ background: color}}
        onClick={onClick}></div>
    )
}

export default Palette;
