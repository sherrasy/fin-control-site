import { Button } from "antd";
import { MessageFilled } from "@ant-design/icons";

function ContactButton(): JSX.Element {

  return (
    <div className='contact-button'>
      <Button type="primary" icon={<MessageFilled />}> Связаться с нами</Button>
    </div>
  );
}
export default ContactButton;
