import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';

interface LocationState {
  email: string;
  password: string;
}

const Page3: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state as LocationState;

  const tableData = [{ email, password }];

  return (
    <div>
      <div>
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button variant='classic' color='red' onClick={() =>navigate("/")}>Go to Page 1</Button>

      </div>
    </div>
  );
};

export default Page3;
