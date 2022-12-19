import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactForm(props) {

    const [open, setOpen] = React.useState(false);
    const [entry, setEntry] = React.useState({
       message: '', contactname: '', email: '', phone: ''
    })


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setEntry({...entry, [event.target.name]: event.target.value })
    }

    const addEntry = () => {
        console.log({entry});
        props.saveEntry(entry);
        handleClose();
    }

    return (
        <div>
            <Button size="large" className="Button" variant="contained"  sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }} onClick={handleClickOpen}>
                Contact Form
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Contact form</DialogTitle>
                <DialogContent>
                    <TextField
                        multiline
                        autoFocus
                        margin="dense"
                        name="message"
                        value={entry.message}
                        label="Message"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="contactname"
                        value={entry.contactname}
                        label="Name"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={entry.email}
                        label="Email"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={entry.phone}
                        label="Phone"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={addEntry}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

