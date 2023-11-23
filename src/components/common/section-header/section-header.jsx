import "./section-header.scss";

const SectionHeader = (props) => {
    return (
        <div className="section-header">
            
                <span><h2>{props.title2}</h2></span>
                <span><p>{props.title3}</p></span>
           
        </div>
    );
};

export default SectionHeader;
