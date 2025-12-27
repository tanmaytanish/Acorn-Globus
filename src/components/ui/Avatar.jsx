const Avatar = ({ name, image, color, icon, size = 'md' }) => {
    const sizeClasses = {
        xs: 'w-6 h-6 text-xs',
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
    };

    const getInitials = (name) => {
        if (!name) return '';
        const parts = name.split(' ');
        return parts.map(p => p[0]).join('').slice(0, 2).toUpperCase();
    };

    if (image) {
        return (
            <img
                src={image}
                alt={name}
                className={`${sizeClasses[size]} rounded-full object-cover`}
            />
        );
    }

    return (
        <div className={`${sizeClasses[size]} ${color || 'bg-gray-200 text-gray-600'} 
                    rounded-full flex items-center justify-center font-medium`}>
            {icon || getInitials(name)}
        </div>
    );
};

export default Avatar;
