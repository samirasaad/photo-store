import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './ImageModal.scss'
const ImageModal = ({ isOpen, handleModalState, imgObj: { imgId, img_description, imgUrl } }) => {
    // const [scroll, setScroll] = React.useState('body');

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth='lg'
                scroll='body'
                open={isOpen}
                onClose={handleModalState}
                // scroll={scroll}
            >
                <DialogContent >
                    {/* <div className='my-1'>
                        {img_description}
                    </div> */}
                    <div className='text-center img-wrapper' style={{
                        backgroundImage: `url(${imgUrl})` ,
                        backgroundSize: `contain`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`
                        }}>
                        {/* <img src={imgUrl} /> */}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        share
                   </Button>
                    <Button color="primary">
                        download
                   </Button>
                    <Button onClick={handleModalState} color="primary">
                         like
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ImageModal;