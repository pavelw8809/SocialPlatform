import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/Activity';
import useStore from '../../../app/stores/store';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityDetails from './details/ActivityDetails';

const ActivityDashboard = () => {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    return(
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode &&
                    <ActivityDetails />
                }
                {activityStore.editMode &&
                    <ActivityForm />
                }
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);