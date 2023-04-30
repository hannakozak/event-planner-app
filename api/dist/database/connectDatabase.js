import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connectDatabase = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        mongoose.set('strictQuery', true);
        console.log('mongo database is connected');
    }
    catch (error) {
        console.error('mongo database connection error');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdERhdGFiYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGF0YWJhc2UvY29ubmVjdERhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBNEIsTUFBTSxVQUFVLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO0lBQ2xDLElBQUk7UUFDRixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ3RDLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsZUFBZSxFQUFFLElBQUk7U0FDSixDQUFDLENBQUM7UUFDckIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDbEQ7QUFDSCxDQUFDLENBQUMifQ==