import React from "react";
import "./directory.style.scss";
import Menuitem from "../menuitem/menuitem.components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySelector } from "../../redux/directory/directory.select";

const directory = ({ section }) => (
  <div className="directory-menu">
    {section.map(({ id, title, imageUrl, size }) => {
      return (
        <Menuitem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
        />
      );
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: directorySelector,
});

export default connect(mapStateToProps)(directory);
