/**
 * Notification Message
 */

// Dependencies
import React, { useMemo, FC, PropsWithChildren } from 'react';
import reactStringReplace from 'react-string-replace';
import Data from '../../utils/data';

// MUI
import { DialogContentText, styled, Typography, Link } from '@mui/material';

interface MessageProps extends PropsWithChildren, Notification {
	setNotifications: any;
}

const Message: FC<MessageProps> = ({ id, title, message, dateAdded, link, linkText, setNotifications, read }) => {

    let messageBody: string | any = message;
    if (link && linkText) {
        messageBody = reactStringReplace(messageBody, '{link}', () => (
            <Link href={link} target='_blank' component='a'>
                {linkText}
            </Link>
        ));
    };

    const readNotificationStyles = useMemo(() => {
        return {
            backgroundColor: '#80808040',
        }
    }, []);

    const handleMarkNotificationAsRead = async () => {
        await Data.Notifications.updateReadNotifications(id);
        setNotifications((prevNotifications: Notification[]) => {
            const updated = prevNotifications.map((notification) => {
                if (notification.id === id) notification.read = true;
                return notification;
            });
            return updated;
        });
    };

    return (
        <TextBox
            sx={read ? readNotificationStyles : {}}
        >
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='subtitle2' >{messageBody}</Typography>
            <Typography
                variant='subtitle2'
                fontSize='.6rem'
                textAlign='right'
            >Last Updated: <b>{dateAdded}</b></Typography>
            {!read ? <MarkAsReadButton
                variant='button'
                onClick={handleMarkNotificationAsRead}
            >Mark as read</MarkAsReadButton> : null}
        </TextBox>
    )
};

const TextBox = styled(DialogContentText)({
    padding: '.25em .5em',
    borderRadius: '8px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    marginTop: '1em',
});

const MarkAsReadButton = styled(Link)({
    textTransform: 'unset',
    cursor: 'pointer',
})

export default Message;