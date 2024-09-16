import { MessageFilled } from "@ant-design/icons";
import { Button } from "antd";

function ContactButton(): JSX.Element {

  return (
    <div className='contact-button'>
      <Button type="primary" icon={<MessageFilled />}> Связаться с нами</Button>
    </div>
  );
}
export default ContactButton;
