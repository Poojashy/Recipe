// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import StarIcon from '@mui/icons-material/Star';
// import { Box, Modal } from '@mui/material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

// export default function RecipeReviewCard({ item }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <Card onClick={handleOpen} sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={item.name}
//           subheader={item.cuisine}
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image={item.image}
//           alt="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Prepation Time:{item.prepTimeMinutes} minutes
//           </Typography>
//           <Typography>
//             No of Serving:{item.servings}
//           </Typography>
//           <Typography>
//             Ratings:{item.rating}
//           </Typography>
//           <Typography>
//             Review Count:{item.reviewCount}
//           </Typography>
//         </CardContent>

//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             {item.rating}<StarIcon fontSize='75' />
//           </IconButton>
//           <IconButton>
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
//             <Typography sx={{ marginBottom: 2 }}>
//               Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//               aside for 10 minutes.
//             </Typography>
//             <Typography sx={{ marginBottom: 2 }}>
//               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//               medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//               occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//               large plate and set aside, leaving chicken and chorizo in the pan. Add
//               pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//               stirring often until thickened and fragrant, about 10 minutes. Add
//               saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//             </Typography>
//             <Typography sx={{ marginBottom: 2 }}>
//               Add rice and stir very gently to distribute. Top with artichokes and
//               peppers, and cook without stirring, until most of the liquid is absorbed,
//               15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//               mussels, tucking them down into the rice, and cook again without
//               stirring, until mussels have opened and rice is just tender, 5 to 7
//               minutes more. (Discard any mussels that don&apos;t open.)
//             </Typography>
//             <Typography>
//               Set aside off of the heat to let rest for 10 minutes, and then serve.
//             </Typography>
//           </CardContent>
//         </Collapse>


//       </Card>

//       <div>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Box sx={{ backgroundColor: "red", height: "100%",display:"flex" }}>
//               <div style={{flex:1 }}>
//                 <img src={item.image} style={{height:"100%",width:"100%"}} alt=""/>
//               </div>
//               <div style={{ flex:1 }}>
//                 Content Part
//                 <h3>Ingredients</h3>
//                 {item.ingredients.map((ing)=>{
//                   return <li>{ing}</li>

//                 })}
//               </div>
//             </Box>
//           </Box>
//         </Modal>
//       </div>

//     </>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Box, Modal } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null); // Store selected item for modal

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  // Modal style with background color
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',  // Modal background color
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',  // Enables vertical scrolling
    maxHeight: '80vh',  // Set a max height to prevent overflow beyond screen
    backgroundColor: '#f9f9f9',  // Light background for the modal
  };

  return (
    <>
      {/* Card with background color */}
      <Card
        onClick={() => handleOpen(item)}
        sx={{
          maxWidth: 345,
          backgroundColor: '#ffffff',  // Card background color
          borderRadius: '8px',  // Rounded corners for the card
          boxShadow: 3,  // Shadow to make the card pop out
          transition: 'transform 0.3s ease',  // Smooth transition on hover
          '&:hover': {
            transform: 'scale(1.05)',  // Slightly enlarge the card on hover
          },
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
          action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
          title={item.name}
          subheader={item.cuisine}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          
          <Typography>Ratings: {item.rating}</Typography>
          <Typography>Review Count: {item.reviewCount}</Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">{item.rating} <StarIcon fontSize="small" /></IconButton>
          <IconButton><FavoriteIcon /></IconButton>
          <IconButton aria-label="share"><ShareIcon /></IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 ,fontWeight: 'bold' }}>Method:</Typography>
            {item.instructions.map((instruction, index) => (
              <Typography key={index} sx={{ marginBottom: 2 }}>{instruction}</Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>

      {/* Modal with background color */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, backgroundColor: '#cace8f' }}> {/* Box with background color */} 
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ paddingBottom: '15px', display: 'flex', justifyContent: 'center' }}>
              {/* Fixed size image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '300px', // Set fixed width
                  height: '300px', // Set fixed height to maintain square shape
                  objectFit: 'cover', // Ensuring image covers the area while maintaining aspect ratio
                  borderRadius: '8px', // Optional: for rounded corners
                }}
              />
            </div>

            {/* Display Preparation and Cook Time below the image */}
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Preparation Time: {item.prepTimeMinutes} minutes
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Cook Time: {item.cookTimeMinutes} minutes
            </Typography>

            {/* Display Meal Type */}
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Meal Type: {item.mealType[0]}
            </Typography>

            {/* Display Difficulty */}
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Difficulty: {item.difficulty}
            </Typography>

            {/* Display Number of Servings and Calories per Serving */}
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Number of Servings: {item.servings}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 ,fontWeight: 'bold' }}>
              Calories per Serving: {item.caloriesPerServing} kcal
            </Typography>

            {/* Display Ingredients */}
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Ingredients
            </Typography>
            <ul>
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* Display Instructions */}
            <Typography variant="h6" sx={{ marginBottom: 2,fontWeight: 'bold'  }}>
              Instructions
            </Typography>
            <ul>
              {item.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
