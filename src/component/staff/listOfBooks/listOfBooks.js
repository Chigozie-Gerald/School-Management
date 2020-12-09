import React, { PureComponent } from "react";
import "./listOfBooks.css";
import { Link, Switch, Route } from "react-router-dom";
import NotFound from "../../notFound";
import Select from "../../select/select";
import SelectPage from "../../select/selectPage";
// import { connect } from 'react-redux'

class ListOfBooks extends PureComponent {
  render() {
    const { match } = this.props;

    const lob_arr = [
      {
        list: [
          {
            title: "New General Mathematics volume 2",
            author: "Mohamad Tanko",
          },
        ],
        subject: "Mathematics",
      },
      {
        list: [
          {
            title: "Modern Biology volume 2",
            author: "Eze Bonafide L.",
          },
          {
            title: "Essential Biology 2007",
            author: "Karl Johnson Oluwajuwon",
          },
        ],
        subject: "Biology",
      },
      {
        list: [
          {
            title: "New School Physics",
            author: "P F. Anyakoha",
          },
        ],
        subject: "Physics",
      },
      {
        list: [
          {
            title: "New School Chemistry Ababio",
            author: "A B. Ababio",
          },
        ],
        subject: "Chemistry",
      },
    ];
    const lob_list = lob_arr.map((elem, n) => (
      <ListOfBooksPane
        match={this.props.match}
        key={`staff_lob_list_${n}`}
        subject={elem.subject}
        list={elem.list}
        title="SS2 20/9"
      />
    ));
    return (
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => (
            <div className="tll div-width-100 flex fd_col flex1">
              <span className="select_out_header">List of Books</span>
              <SelectPage
                pathLink={this.props.match.url + "/list"}
                btnText=""
                txt1="Select Session"
                list1={[
                  "2014/2015 Session",
                  "2015/2016 Session",
                  "2016/2017 Session",
                  "2017/2018 Session",
                  "2018/2019 Session",
                ]}
                txt2="Select Class"
                list2={["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"]}
              />
            </div>
            /* <Select />
              <Select />
              <div className="assCreate_btn_wrapper flex1 flex horiz_align">
                <div className="assCreate_btn div1 center inline_flex div-width-100">
                  <Link
                    className="Link"
                    to={{ pathname: this.props.match.url + "/list" }}
                  >
                    Next
                  </Link>
                </div>
              </div> */
          )}
        />
        <Route
          path={`${match.url}/list`}
          render={() => (
            <div className="lob_wrapper profile_min_height div-width-100 tll">
              <div className="lob_header div-width-100 flex">
                <span className="flex1">
                  SS2 2017/2018 Session List of Books
                </span>
                <div className="center">Contact a book seller</div>
              </div>
              {lob_list}
            </div>
          )}
        />
        <Route
          exact
          render={() => (
            <NotFound height="calc(var(--vvh, 1vh)*100 - 9.5rem)" />
          )}
        />
      </Switch>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default ListOfBooks;

export class ListOfBooksPane extends PureComponent {
  render() {
    const { subject, list } = this.props;
    return (
      <div className="box_border hide flex vert_align lobPane div-width-100">
        <div className="lobPane_txt flex1">
          {subject && <div className="lobPane_role">{subject}</div>}
          {list.map((el, ind) => (
            <div key={`staff_lob_subject_${ind}`} className="lobPane_name flex">
              <span>-</span>
              <span className="flex1">
                {el.title}, {el.author && `(${el.author})`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
