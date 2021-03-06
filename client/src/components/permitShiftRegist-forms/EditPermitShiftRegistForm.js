import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPermitShiftRegist } from "../../actions/permitShiftRegist";

const EditPermitShiftRegistForm = ({ addPermitShiftRegist, editing, setEditing, currentPermitShift, history, branchs }) => {
  const [formData, setFormData] = useState(currentPermitShift);

  useEffect(() => {
    setFormData(currentPermitShift);
  }, [currentPermitShift]);

  const branchId = formData.branchId;
  const shiftNoPermit = formData.shiftNoPermit;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const clearForm = () => {
    setFormData({ ...formData, branchId: "", shiftNoPermit: "" });
    setEditing(false);
  };

  let elmBranchs = branchs.map((ele) => (
    <option value={ele._id}>{ele.branchName}</option>
  ));

  return (
    <Fragment>
      {/* <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addPermitShiftRegist(formData, history, true);
          clearForm();
        }}
      >
        <div className="form-group add-flex" >
          <div class="col-md-4">
            <select
              name="branchId"
              value={formData.branchId}
              onChange={(e) => onChange(e)}
              class="form-control custom-select"
              disabled="true"
            >
              {elmBranchs}
            </select>
          </div>
          <div class="col-md-4" >
            <input
              type="text"
              placeholder="* Số ca được đăng kí"
              name="shiftNoPermit"
              value={formData.shiftNoPermit}
              onChange={(e) => onChange(e)}
              style={{ fontSize: '14px' }}
              required
            />
          </div>
          <div class="col-md-6" >
            <button type="submit" class="btn btn-info"><i class="fas fa-save"></i>
              <span className="hide-sm"> Lưu</span>
            </button>
            <button
              onClick={() => setEditing(false)}
              class="btn btn-warning"
            ><i class="fas fa-times"></i>
              <span className="hide-sm"> Hủy</span>
            </button>
          </div>
        </div>
      </form> */}
      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPermitShiftRegist(formData, history, true);
            clearForm();
          }}
        >
          <div className="form-body">
            <div className="row p-t-5 m-l-5">
              <div className="col-md-addJob-4">
                <div className="form-group has-success">
                  <select
                    name="branchId"
                    value={formData.branchId}
                    onChange={(e) => onChange(e)}
                    class="form-control custom-select"
                  >
                    {elmBranchs}
                  </select>
                </div>
              </div>
              <div className="col-md-addJob-4">
                <div className="form-group has-success">
                  <input
                    type="text"
                    placeholder="* Số ca được đăng kí"
                    name="shiftNoPermit"
                    className="form-control"
                    value={formData.shiftNoPermit}
                    onChange={(e) => onChange(e)}
                    style={{ fontSize: '14px' }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-addJob-4">
                <div className="form-actions">
                  <button type="submit" class="btn btn-info"><i class="fas fa-save"></i> Lưu</button>
                  <button
                    onClick={() => setEditing(false)}
                    class="btn btn-warning"
                  ><i class="fas fa-times"></i> Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

EditPermitShiftRegistForm.propTypes = {
  branchs: PropTypes.object.isRequired,
  addPermitShiftRegist: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired,
};

export default connect(null, { addPermitShiftRegist })(withRouter(EditPermitShiftRegistForm));
