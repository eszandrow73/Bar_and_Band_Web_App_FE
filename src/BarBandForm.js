import { Form, Modal, Input, Button, Checkbox, Select, Collapse, List} from 'antd';
import "antd/dist/antd.css";
import {useState} from 'react';
const { Panel } = Collapse;

export default function BarBandForm (params) {

  const onFinish = (values: any) => {
      alert(values)
  }

  const onChange = (key: string | string[]) => {
    console.log(key);
  };


  return (
    <Modal title="Basic Modal" visible={params.isModalVisible} onCancel={params.inCancel} onOk={params.inCancel} >
      
        <Form>

            <List
                dataSource={params.inData}
                renderItem={item => (
                <List.Item key={item.id}>{item.overview}
                    <Collapse onChange={onChange}>
                        <Panel header={item.bar} key={item.id + 1}>
                            <p>Location : {item.bar_data.location}</p>
                            <a href={item.bar_data.website} target="_blank">Website : {item.bar_data.website}</a><br />
                            <a href={item.bar_data.mainMenu} target="_blank">Menu : {item.bar_data.mainMenu}</a><br />
                            <a href={item.bar_data.beverageMenu} target="_blank">Drinks : {item.bar_data.beverageMenu}</a>
                        </Panel>
                    </Collapse>
                    <Collapse onChange={onChange}>
                        <Panel header={item.band} key={item.id + 2}>
                            <a href={item.band_data.website} target="_blank">Website : {item.band_data.website}</a><br />
                            <a href={item.band_data.music} target="_blank">Music : {item.band_data.music}</a><br />
                            <p>Style : {item.band_data.style}</p>
                            <p>Memebrs : {item.band_data.members}</p>
                        </Panel>
                    </Collapse>
                </List.Item>
                )}
                />
            <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
        </Form>
        </Modal>
  );
};