import React from 'react';

class Input extends React.Component {
  render() {
    const {
      keyword,
      startDate,
      endDate,
      handleChange,
      handleSubmit,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>Search for Article:</label>
        <input
          type="text"
          value={keyword}
          name="keyword"
          onChange={handleChange}
          placeholder="e.g. sport"
        />
        <label>Pick Start Date</label>
        <input
          type="text"
          value={startDate}
          name="startDate"
          onChange={handleChange}
          placeholder="YYYYMMDD"
        />
        <label>Pick End Date</label>
        <input
          type="text"
          value={endDate}
          name="endDate"
          onChange={handleChange}
          placeholder="YYYYMMDD"
        />
        <div className="submit" style={{ margin: 10 }}>
          <input
            type="submit"
            style={{ cursor: 'pointer', width: 100 }}
          ></input>
        </div>
      </form>
    );
  }
}

export default Input;
