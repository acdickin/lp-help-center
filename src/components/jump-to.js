import React, { useState, useEffect } from "react"
import $ from "jquery";

const JumpTo = (props) => {
  if (props.title) {
    return <JumpToRender title={props.title} />
  }
  else {
    return null
  }

}
const JumpToRender = ({ title }) => {
  const [anchorList, setAnchorList] = useState([])

  const populateAnchors = () => {
    setAnchorList([]);
    let anchorlinks = document.getElementsByTagName("h2");
    $.each(anchorlinks, function () {
      $(this).attr('id', $(this).text().replace(/[\W_]/g, "-").toLowerCase())
      let position = $(this).offset().top
      setAnchorList(preArray => [...preArray, { text: $(this).text(), id: $(this).attr("id"), pos: position }])
    })
  }
  // this only runs once on page load
  useEffect(() => {
    populateAnchors();
  }, [title])


  // $(window).scroll(function () {
  //   const mainTitlePostion = $('#maintitle').offset().top;
  //   //check the window's position and account for the header
  //   let position = $(this).scrollTop();
  //   //for each h2 in the article
  //   anchorList.forEach(anchor => {
  //     //if the position of the window is greater than the position of the title (that is, the title has scrolled out of view)
  //     if (position > anchor.pos) {
  //       //deactivate all other active links in the anchorlist
  //       $('.anchorlist > li ').removeClass('active');
  //       $(`li[name=${anchor.id}]`).addClass('active')
  //     } else if (position <= mainTitlePostion) {
  //       $('.anchorlist > li ').removeClass('active');
  //       $('.anchorlist > #jumptotop ').addClass('active');
  //     }
  //   });
  //   if ($(window).scrollTop() + $(window).height() === $(document).height()) {
  //     $('.anchorlist > li').removeClass('active');
  //     $('.anchoritem').last().addClass('active');
  //   };
  // });


  const renderAnchorlist = () => {
    // cant have a tag as it breaks the onclick
    return anchorList.map(anchor => <li key={anchor.id} className="anchoritem" tabIndex="-1" name={anchor.id} onClick={() => { scrollTo("#" + anchor.id) }}>{anchor.text}</li>)
  }

  const jumptoList = {
    position: "sticky",
    top: "100px",
    listStyleType: "none"
  }
  const scrollTo = (element) => {

    $('html, body').animate({
      scrollTop: $(element).offset().top - 100
    }, 200);
  }

  return (
    <div className="inner-menu full-width">
      <ul style={jumptoList} className="anchorlist">
        {(anchorList.length > 0) ? <li className="active" id="jumptotop" onClick={() => { scrollTo("#maintitle") }}> {title}</li> : ""}
        {(anchorList.length > 0) ? renderAnchorlist() : ""}
      </ul>
    </div>
  )
}
export default JumpTo;