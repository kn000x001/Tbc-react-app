import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Place of Birth</th>
            <th>Adress</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Jack</td>
            <td>Doe</td>
            <td>08551395763</td>
            <td>male</td>
            <td>05/07/1993</td>
            <td>London</td>
            <td>Walter St.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
