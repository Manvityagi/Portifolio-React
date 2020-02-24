import React from "react";
import "../css/ContactMe.css";

class ContactMe extends React.Component {
  render() {
    return (
      <>
        <div className="sectiontitle">
          <h2>Contact</h2>
          <span className="headerLine"></span>
        </div>
        <div className="row">
          <div className="col s4 talk">
            <h4>Wanna talk about something or hire me ?</h4>
            <p>
              Remember when you are creating your layout that all columns must
              be contained inside a row and that you must add the col class to
              your inner divs to make them into columns
            </p>
          </div>

          <div className="col s8">
            <form>
              <h4>Get in touch with me</h4>
              <div className="row">
                <div className="col s4">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="col s4">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea2"
                    className="materialize-textarea"
                    data-length="120"
                  ></textarea>
                  <label for="textarea2">Textarea</label>
                </div>
              </div>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactMe;
