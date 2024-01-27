import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import Header from './Header';

const WooCommerceForm = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const [formData, setFormData] = useState({
    api_url: '',
    consumer_key: '',
    consumer_secret: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission here, if needed

    // Redirect to /dashboard
    navigate('/dashboard');
  };

  return (
    <>
      <Header />
      <div style={{ width: '100%', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <Card title="Create Connector">
          <Form layout="vertical">
            <Form.Item label="API URL">
              <Input
                placeholder="Enter API URL"
                name="api_url"
                value={formData.api_url}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item label="Consumer Key">
              <Input
                placeholder="Enter Consumer Key"
                name="consumer_key"
                value={formData.consumer_key}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item label="Consumer Secret">
              <Input
                placeholder="Enter Consumer Secret"
                name="consumer_secret"
                value={formData.consumer_secret}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Space>
              <Button
                type="primary"
                size="large"
                onClick={handleSubmit}
              >
                Create Connector
              </Button>
              <Button type="default" size="large">
                Clear
              </Button>
            </Space>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default WooCommerceForm;
