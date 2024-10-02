
const UsersForm = () => {
  return (
    <form>
      <h3>Add new Users</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
        />
      </div>

      <div className="btn-group mb-3" role="group" aria-label="Basic checkbox toggle button group">
        <input
          type="checkbox"
          className="btn-check"
          id="activity"
          name="activity"
        />
        <label
          htmlFor="activity"
          className="btn btn-outline-primary"
        >
          Activity:
        </label>
      </div>

      <div className="form-floating">
        Role:
        <label htmlFor="role"></label>
        <select
          className="form-select"
          name="role"
          id="role"
        >
          <option value="" disabled>Выберите Роль</option>
        </select>
      </div>

    </form>
  );
};

export default UsersForm;