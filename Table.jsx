export default function Table({ data, del }) {
  return (
    <table border="1" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((x, i) => (
          <tr key={i}>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.amount}</td>
            <td>{x.status}</td>
            <td>
              <button onClick={() => del(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}