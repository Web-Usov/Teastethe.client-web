import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardContent,CardActions, IconButton, Typography} from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });


export class TeaItem extends Component {

    render() {
        const { tea, classes } = this.props
        return (
            <Card className={classes.card}>
                <CardHeader
                    //   avatar={
                    //     <Avatar aria-label="Recipe" className={classes.avatar}>
                    //       R
                    //     </Avatar>
                    //   }
                    //   action={
                    //     <IconButton>
                    //       <MoreVertIcon />
                    //     </IconButton>
                    //   }
                    title={tea.name}
                    subheader={tea.type}
                />
                <CardMedia
                    className={classes.media}
                    image="/images/tea.jfif"   
                    title="Tea"
                />
                <CardContent>
                    <Typography component="p">
                        Оч вкусный чай, правда.
                     </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <Favorite />
                    </IconButton>
                    {/* <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton> */}
                </CardActions>
                {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                    </CardContent>
                </Collapse> */}
            </Card>
        )
    }
}

export default withStyles(styles)(TeaItem)
