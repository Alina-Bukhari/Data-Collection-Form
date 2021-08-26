import { Form, Input, Select, DatePicker,TimePicker, Button, Rate, Checkbox, Row, Col } from 'antd';
import './Form.css';
import './Form.js';
import './App.css';

const App=()=> {
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const [form] = Form.useForm();

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  
  const onFinish = (fieldsValue) => {
      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
 
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
    </div>
    
    <div className='form-content-right'>
    <Row style={{paddingTop: 30}}>
      <Col span={22}>
    <Form form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
    <div className='form-inputs'>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select an option "
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item name="date-time-picker" label="DatePicker[showTime]" {...config}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item name="month-picker" label="MonthPicker" {...config}>
        <DatePicker picker="month" />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item name="range-time-picker" label="RangePicker[showTime]" {...rangeConfig}>
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item name="time-picker" label="TimePicker" {...config}>
        <TimePicker />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item 
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      </div>
      <div className='form-inputs'>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
       <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>
      </Form.Item>
      </div>
    </Form>
    </Col>
    </Row>
    </div>
    </div>
  );
};
export default App;
