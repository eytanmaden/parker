export const parkingAverageTime = async (lat, lon) => {
    const url = `http://ec2-3-70-178-147.eu-central-1.compute.amazonaws.com:8080/get_avg_time?lat=${lat}&lng=${lon}`;
    return fetch(url).then(res => res.text()).catch(err => {
        console.log(err);
        return 'Average time unavailable.';
    })
}